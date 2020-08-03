import React from 'react'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import CardDetails from './CardDetails'
class DetailsContainer extends React.Component {

    state = {
        loading : true,
        error : null ,
        data : undefined,
        modalIsOpen: false
    }

    componentDidMount(){
        this.fetchData ()
    }
    fetchData = async () => {
        this.setState ({loading : true, error : null })
        try {
            const data = await api.badges.read(this.props.match.params.id)
            this.setState({loading : false, data :data})
        } catch ( error ){
            this.setState({ loading : false , error : error })
        }
    }
    handleOpenModal = e => {
        this.setState({
            modalIsOpen : true
        })
    }
    handleCloseModal = e => {
        this.setState({
            modalIsOpen : false
        })
    }
    handleDeleteCard = async e => {
        this.setState({
            loading: true, error: null
        })
        try {
            await api.badges.remove(this.props.match.params.id)
            this.setState({ loading : false})
            this.props.history.push('/lista')
        }catch(error){
            this.setState({loading : false, error:error})
        }
    }


    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        if(this.state.error){
            return <PageError error = {this.state.error}/>
        }

        return ( <CardDetails 
                modalIsOpen= {this.state.modalIsOpen}
                onOpenModal = {this.handleOpenModal}
                onCloseModal={this.handleCloseModal}
                onDeleteCard={this.handleDeleteCard}
                card = {this.state.data}/> )
    }
}

export default DetailsContainer