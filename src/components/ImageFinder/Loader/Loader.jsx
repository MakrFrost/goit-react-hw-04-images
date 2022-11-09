import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#000']}
      />
    </div>
  );
};
