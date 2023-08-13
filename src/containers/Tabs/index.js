import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
import image1 from 'Assets/images/tabs/shop.png'
import image2 from 'Assets/images/tabs/adminshop.png'

const data = [
  {
    id: 1,
    title: 'main.tabs.title1',
    desc: 'main.tabs.desc1',
    url: 'shop',
    img: image1,
  },
  {
    id: 2,
    title: 'main.tabs.title2',
    desc: 'main.tabs.desc2',
    url: 'admin',
    img: image2,
  },
]

const Tabs = () => {
  const { t } = useTranslation()

  const [active, setActive] = useState(data[0])

  return (
    <div className='content-wrapper'>
      <div className='content-container'>
        {data.map((item, i) => (
          <div
            key={item.id}
            onClick={() => setActive(item)}
            className={`content-btn ${active == item ? '--active' : ''}`}
          >
            <h3 className='fs-sm font-bold mb-4'>
              {t(item.title)}
              {i === data.length - 1 && <span className='next' />}
            </h3>
            <p className='text-gray-600'>{t(item.desc)}</p>
          </div>
        ))}
      </div>
      <aside className='demo-aside'>
        <div className='demo-head'>
          <div className='demo-head__btns'>
            <span className='red' />
            <span className='orange' />
            <span className='green' />
          </div>
          <div className='demo-head__bar'>
            zhasapp.com/
            <span>{active.url}</span>
          </div>
        </div>
        <div className='demo demo__dt'>
          <img src={active.img} />
        </div>
      </aside>
    </div>
  )
}

export default Tabs
