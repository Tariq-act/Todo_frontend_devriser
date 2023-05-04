import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header/Header';
import Task from '@/components/Task/Task';
import TaskModal from '@/components/TaskModal/TaskModal';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { getTodos } from '@/service/todoAPI';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // async function get() {
  //   const token = JSON.parse(localStorage.getItem('token'));

  //   console.log(token);
  //   const response = await axios.get(
  //     'https://fair-tan-drill-suit.cyclic.app/todo/getalltodo',
  //     {
  //       headers: {
  //         authorization: token,
  //       },
  //     }
  //   );
  //   const data = response.data;
  //   console.log(data);
  // }

  // useEffect(() => {
  //   get();
  // }, []);

  // console.log(data);
  return (
    <>
      <Head>
        <title>Task tacker</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={` ${inter.className}`}>
        <Navbar />
        <Task />
        <ToastContainer />
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   try {
//     // const token = localStorage.getItem('token') || '';
//     const token = JSON.parse(localStorage.getItem('token'));

//     console.log(token);
//     const response = await axios.get(
//       'https://fair-tan-drill-suit.cyclic.app/todo/getalltodo',
//       {
//         headers: {
//           authorization: token,
//         },
//       }
//     );
//     const data = response.data;
//     console.log(data);

//     console.log(data)

//     return { props: { data } };
//   } catch (error) {
//     console.error("error");
//     return { props: { data: null } };
//   }
// }
