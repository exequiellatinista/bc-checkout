import React, { FunctionComponent } from 'react';

import withIconContainer from './withIconContainer';

const IconPaypal: FunctionComponent = () => (
    <svg height="300" viewBox="0 0 255 300" width="255" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M228.03 77.2c3.6-23.02-.03-38.7-12.48-52.89C201.83 8.7 177.07 2 145.4 2H53.4c-6.47 0-11.99 4.7-12.99 11.11L2.1 256.03a7.9 7.9 0 0 0 7.8 9.14h56.78c79.33-53.38 148.45-81.4 161.35-187.97z"
            fill="#253B80"
        />
        <path
            d="M228.02 77.2C124 73 95 98 80.5 177.52l-13.82 87.65-3.91 24.85a6.9 6.9 0 0 0 6.82 7.98h47.86c5.67 0 10.48-4.12 11.37-9.71l.48-2.43 9-57.2.59-3.15c.88-5.6 5.7-9.73 11.37-9.73h7.16c46.38 0 82.68-18.83 93.29-73.33 4.43-22.76 2.14-41.77-9.6-55.14a45.77 45.77 0 0 0-13.1-10.1z"
            fill="#179BD7"
        />
        <path
            d="M215.33 72.14c-3.88-1.12-7.82-2-11.8-2.62a149.83 149.83 0 0 0-23.79-1.73h-72.1a11.49 11.49 0 0 0-11.36 9.73l-15.34 97.16-.44 2.84a13.1 13.1 0 0 1 12.95-11.1h27c53 0 94.5-21.53 106.62-83.82.37-1.85.67-3.64.95-5.4a64.66 64.66 0 0 0-9.98-4.2c-.9-.3-1.8-.59-2.71-.86z"
            fill="#222D65"
        />
    </svg>
);

export default withIconContainer(IconPaypal);
