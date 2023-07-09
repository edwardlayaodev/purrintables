import Logo from '../assets/logo.png'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header>
      <nav className="text-white">
        <div className="container mx-auto flex p-2 items-center">
          <div className="mr-auto">
            <Image src={Logo} width={150} alt='Purrintables'/>
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
          </div>
        </div>
      </nav>
    </header>
  )
}
