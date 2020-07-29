import React from 'react'
import CardsList from '../components/CardsList'
import './style/List.css'
import { Link } from 'react-router-dom'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'


class List extends React.Component {
    state = {
        loading: true,
        error: null,
        data : undefined
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading : true,error: null})
        try{
            const data = await api.badges.list()
            this.setState({loading : false,data: data})
        }catch(error){
            this.setState({loading: false , error: error})
            
        }
    }


    render(){
        
        if(this.state.loading === true){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        return (
            <React.Fragment>
          
                <div className="List">
                    <div className="List__hero">
                        <div className="List__container">
                            <img  className="List_conf-logo" src=" " alt=""/>
                        </div>
                    </div>
                </div>

                <div className="List__container">
                    <div className="List__buttons">
                        <Link  to="/" className="btn btn-primary" >
                            Nuevo asistente
                        </Link>
                    </div>
                </div>


                <div className="List__list">
                    <div className="List__container">
                       <CardsList cards = {this.state.data} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default List