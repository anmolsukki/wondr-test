import React from 'react';
import LoaderModule from './Loader.module.css';

export default function Loader() {
  return (
    <div className={LoaderModule.loader}>
      <div className={LoaderModule.sblCircDual}></div>
    </div>
  );
}
