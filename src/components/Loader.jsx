import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useState } from "react";
// Using the loaders from the react-spinners package
import { css } from "@emotion/react";


function Loader() {
  let [loading, setLoading] = useState(true);
  
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  return (
    <div style={{ marginTop: '150px', textAlign: 'center', width: '100%' }}>
      <div className="sweet-loading" style={{ display: 'inline-block' }}>
        
        <ClimbingBoxLoader
          color="#000"
          loading={loading}
          css='' 
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loader;



