import React from 'react';
import {motion} from 'framer-motion';

function UserComponent() {
  return (
    <div>
      <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-red-500 text-center text-xl">User Component</motion.h1>
    </div>
  )
}

export default UserComponent
