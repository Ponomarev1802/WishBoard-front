import React from 'react'
import PropTypes from 'prop-types'
import Wish from './Wish'
import { connect } from 'react-redux'


class Wishes extends React.Component{
    render(){
        const wishesList = this.props.wishes.map((item)=>(
			<Wish key={item.id} id = {item.id} name={item.name}/>
		));
        return(
            <div id="wishes" className="p-3 bg-white card">
                <div className="nav nav-tabs">
                    <div className="nav-item">
                        <a className="nav-link active" href="#">Последние</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="#">Активные</a>
                    </div>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Категории</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="#">Завершенные</a>
                    </div>
                </div>
                {wishesList}
            </div>
        );
    }
}

const mapStateToProps = store=>{
	console.log(store)
	return {
		wishes: store.wishes,
	}
}



Wishes.propTypes = {
	wishes: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Wishes);
