import { Blocks } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.overlay}>
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
