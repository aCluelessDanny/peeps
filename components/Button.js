import React from 'react';
import Loading from './Loading';

const Button = ({ run, small, primary, warning, disabled, loading, done, children, ...rest }) => {
  let buttonClass = 'flex flex-row items-center justify-center m-2 shadow bg-gradient-to-r'
  buttonClass += (small ? ' px-4 py-2 rounded-md' : ' px-6 py-3 rounded-lg');

  if (done) {
    buttonClass += ' text-white from-green-400 to-green-500';
  } else if (primary) {
    buttonClass += ' text-white from-blue-400 to-blue-500';
  } else if (warning) {
    buttonClass += ' text-white from-red-400 to-red-500';
  } else  {
    buttonClass += ' text-black from-white to-gray-50';
  }
  buttonClass += ' disabled:opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed transform hover:scale-105 focus:ring transition-all';

  return (
    <button className={buttonClass} onClick={run} disabled={loading || disabled} {...rest}>
      <div>{children}</div>
      {loading && (
        <div className="h-6 w-6 ml-2">
          <Loading size={24} color="white"/>
        </div>
      )}
    </button>
  )
}

export default Button;
