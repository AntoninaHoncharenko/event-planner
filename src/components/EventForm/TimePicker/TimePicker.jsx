import { Space, TimePicker } from 'antd';
import PropTypes from 'prop-types';

export const Time = ({ setTime }) => {
  const onChange = (time, timeString) => {
    setTime(timeString);
    console.log(time);
    console.log(timeString);
  };

  return (
    <Space
      wrap
      style={{
        //   width: '240px',
        //   height: '56px',
        //   padding: '16px 12px',
        //   marginBottom: '20px',
        //   borderRadius: '8px',
        //   border: '1px solid #ACA7C3',
        //   backgroundColor: '#FFFFFF',
        color: '#7B61FF',
      }}
    >
      <TimePicker
        use12Hours
        format="h:mm a"
        onChange={onChange}
        style={{
          width: '240px',
          padding: '16px 12px',
          marginBottom: '20px',
          borderRadius: '8px',
          border: '1px solid #ACA7C3',
          backgroundColor: '#FFFFFF',
          color: '#7B61FF',
          fontFamily: 'Poppins',
          fontSize: '16px',
        }}
        placeholder="Select Time"
        allowClear="false"
        popupStyle={{ width: '240px', height: '160px' }}
      />
    </Space>
  );
};

Time.propTypes = {
  setTime: PropTypes.func,
};
