import * as React from 'react';

import { Redirect, Route } from 'react-router-dom';

import { isGranted } from './lib/abpUtility';

declare var abp: any;

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props => {

        if (!abp.session.userId)
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          );

        // if (permission && !isGranted(permission)) {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: '/exception?type=401',
        //         state: { from: props.location },
        //       }}
        //     />
        //   );
        // }
        return <Component {...props} />
        //return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
