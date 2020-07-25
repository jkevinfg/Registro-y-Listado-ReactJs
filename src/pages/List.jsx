import React from 'react'
import CardsList from '../components/CardsList'
import './style/List.css'
import { Link } from 'react-router-dom'

class List extends React.Component {

    constructor(props){
        super(props)
        console.log("1 Constructor")
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        console.log("3 componentDidMount")
        this.timeoutId  = setTimeout( () => {
            this.setState({
                data:  [
                    {
                      id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",
                      firstName:"Freda",
                      lastName:"Grady",
                      email:"Leann_Berge@gmail.com",
                      jobTitle:"Legacy Brand Director",
                      twitter:"FredaGrady22221-7573",
                      avatarUrl:"https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                    },
                    {
                      id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",
                      firstName:"Major",
                      lastName:"Rodriguez",
                      email:"Ilene66@hotmail.com",
                      jobTitle:"Human Research Architect",
                      twitter:"ajorRodriguez61545",
                      avatarUrl:"https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                    },
                    {
                      id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",
                      firstName:"Daphney",
                      lastName:"Torphy",
                      email:"Ron61@hotmail.com",
                      jobTitle:"National Markets Officer",
                      twitter:"DaphneyTorphy96105",
                      avatarUrl:"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                    }
                  ]
            })
        } , 3000)

    }

    componentDidUpdate(prevProps,prevState){
        console.log('5 ComponentDidUpdate()')
        console.log({
            prevProps,prevState
        })

        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount(){
        console.log("6. component will mount")
        clearTimeout(this.timeoutId)
    }

    render(){
        console.log("2/4 render()")
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