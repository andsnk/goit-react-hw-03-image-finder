import { Blocks } from 'react-loader-spinner';
import s from './Loader.module.css'

const Loader = () => (
  <div className={s.overlay}>
    <Blocks
      visible={true}
      height="120"
      width="120"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  </div>
);

export default Loader;
