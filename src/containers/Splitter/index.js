import Split from 'react-split-grid'
import code from '@/assets/images/code.png'
import secondSide from '@/assets/images/secondSide.png'
import BeforeAfterReact from 'before-after-react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
  imageUrl: 'https://i.ibb.co/yq6Yy0M/code.png'
};
const SECOND_IMAGE = {
  imageUrl: 'https://i.ibb.co/dBr1R9s/second-Side.png'
};

const Splitter = () => {
  return (
    <ReactBeforeSliderComponent
      firstImage={SECOND_IMAGE}
      secondImage={FIRST_IMAGE}
    />
  )
}

export default Splitter