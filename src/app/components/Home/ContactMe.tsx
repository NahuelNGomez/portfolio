'use client'

import React from 'react';

import { useForm, ValidationError } from '@formspree/react';


export default function ContactMe() {
  const [state, handleSubmit] = useForm("xdoryqbv");
  if (0) {
      return (
        <section className="bg-white dark:bg-transparent">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Mensaje enviado con éxito!</h2>
          </div>
        </section>
      );
  }
  return (
    <section className="bg-white dark:bg-transparent">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contactame!</h2>
        {/*<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>*/}
        <form onSubmit={handleSubmit} className="space-y-8">  
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tu email</label>
                <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-dark0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="name@server.com" required autoComplete="off" autoCorrect="off"/>
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tu mensaje</label>
                <textarea id="message" name='message' rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja un comentario..."/>
                <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                />
            </div>
            <div className='flex justify-center'>
              <button type="submit" disabled={state.submitting} className="py-3 px-5 text-sm font-medium text-center text-white bg-dark0 rounded-lg sm:w-fit hover:bg-gray-900  outline-none ring-dark2 dark:bg-dark0 dark:hover:bg-dark1 dark:ring-2 dark:ring-dark1">Enviar mensaje</button>
            </div>
        </form>
    </div>
    </section>
  );
}