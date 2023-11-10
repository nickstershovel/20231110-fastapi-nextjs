"use client";
import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

const getCookie = async () => {
  try {
    const response = await axiosInstance.get('/cookie');
    console.log(response.data);
    console.log(document.cookie);
  } catch (error) {
    console.error(error);
  }
};

const getCookieTest = async () => {
  try {
    const response = await axiosInstance.get('/cookie-test');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default function Home() {
  return (
    <main className={styles.main}>
        <button onClick={getCookie}>Get Cookie</button>
        <button onClick={getCookieTest}>Cookie Test</button>
    </main>
  )
}
