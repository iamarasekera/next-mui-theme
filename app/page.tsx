import Image from 'next/image'
import styles from './page.module.css'
import HeroBanner from '../components/HeroBanner';
import AboutSpiderMan from '../components/AboutSpiderMan';
import AboutIronMan from '../components/AboutIronMan';

export default function Home() {
  return (
    <div>
    <HeroBanner />
    <AboutSpiderMan />
    <AboutIronMan />
  </div>
  )
}
