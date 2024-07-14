import Image from 'next/image'
import Picture from '../../../public/heroimg.svg'
import Button from '@/app/components/button'
export default function HeroPage() {
  return (
    <div className='hero-container'>
       <div className="Hero-picture Hero-pictureRes">
            <Image src={Picture} alt='' />
        </div>
        <div className="Hero-info">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <Button text='Get Started' />
        </div>
        <div className="Hero-picture">
            <Image src={Picture} alt='' />
        </div>
        
    </div>
  )
}
