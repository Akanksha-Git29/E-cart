import React from 'react'
import { connect } from 'react-redux'
import { Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = ({component:Component, auth,...rest}) => (
    // <Routes>
    //     <Route 
    //         {...rest} 
    //         render = {(props) => 
    //             auth.isAuthenticated ? <Component {...props}/> : <Navigate to="/login" replace={true}/>
    //         }
    //     />
    // </Routes> //for this inreact6 it uses outlet to render child elements
    auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" replace={true}/>
    
)


const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(ProtectedRoute)
