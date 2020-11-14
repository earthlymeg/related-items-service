// module.exports = 
// {  
//   "presets": [    
//   [
//     "@babel/preset-env",      
//     {
//       "modules": false
//     }    
//   ],    
//     "@babel/preset-react"  
//   ],  
//     "plugins": [
//       "react-hot-loader/babel"
//       ]
// };

module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current",
        },
      },
    ],
  ],
};