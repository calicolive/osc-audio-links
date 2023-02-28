import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { products } from '~/utils/products';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface Product {
  id: number;
  name: string;
  description: JSX.Element;
  link: string;
  img: string;
}

export default function Products() {
  const [open, setOpen] = useState(false);

  const [product, setProduct] = useState<Product | null>(null);

  const handleClick = (index: number) => {
    setProduct(products[index]);

    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section>
      <div className='flex flex-col items-center justify-center text-white pt-14 space-y-4'>
        <h2 className='text-xl font-medium tracking-tight'>Products </h2>
        <ul className='space-y-4'>
          {products.map((product, index) => {
            return (
              <motion.li
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                key={product.id}
                className='text-center items-center'>
                <button
                  className='p-4 bg-black w-72 md:w-96 rounded-lg hover:brightness-200 font-medium border-2 border-white/50'
                  onClick={() => handleClick(index)}>
                  {product.name}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <AnimatePresence>
        {open && (
          <Dialog
            static
            key='dialog'
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, y: '%50' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='relative z-10'
            open={open}
            onClose={handleClose}>
            <div className='fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity' />
            <div className='fixed inset-0 z-10 overflow-y-auto'>
              <div className='flex min-h-full justify-center p-4 text-center items-center '>
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-black px-4 pt-5 pb-4 text-left shadow-2xl transition-all my-8 w-full max-w-lg text-white'>
                  <div className='flex flex-col space-y-4 '>
                    <div className='flex justify-end'>
                      <button>
                        <XMarkIcon
                          className='h-6 w-6 '
                          onClick={() => setOpen(false)}
                        />
                      </button>
                    </div>
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className='w-full rounded-lg object-cover'
                      src={product?.img}
                      alt='placeholder'
                    />
                    <Dialog.Title className='font-medium'>
                      {product?.name}
                    </Dialog.Title>
                    <Dialog.Description>
                      {product?.description}
                    </Dialog.Description>
                    <a
                      className='inline-flex w-full justify-center rounded-md border-2  bg-black border-white/50 px-4 py-2  text-base font-medium text-white shadow-sm hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2'
                      href={product?.link}>
                      Learn more
                    </a>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
