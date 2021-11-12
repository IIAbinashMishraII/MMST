//import logo from './logo.svg';
import './App.css';
import surface from './surface.png';
import rock from './rock.jpg'
import Select from 'react-select'
import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const gngselectOptions = [
  {
    text: 'General Shape',
    options: [{value:1, label:'Massive'}, {value:2, label:'Platy/Tubular'}, {value:3, label:'Irregular'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[4,4,3,3,-49,0,0,1,1,0],[2,2,4,4,4,4,4,4,2,1],[3,0,1,1,-49,2,2,4,0,4]]
  },
  {
    text: 'Ore Thickness',
    options: [{value:1, label:'Very Narrow'}, {value:2, label:'Narrow'}, {value:3, label:'Intermediate'}, {value:4, label:'Thick'}, {value:5, label:'Very Thick'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[1,-49,-10,-49,4,4,4,3,1,4],[2,-49,1,-49,3,3,4,4,1,3],[3,0,3,0,0,1,0,4,0,2],[4,3,4,4,-49,-49,-49,1,2,0],[4,3,4,4,-49,-49,-49,0,1,0]]
  },
  {
    text: 'Ore Plunge',
    options: [{value:1, label:'Flat'}, {value:2, label:'Intermediate'}, {value:3, label:'Steep'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,3,2,1,4,4,-49,1,4,2],[3,2,1,1,0,0,0,3,2,3],[1,4,4,4,-49,-49,4,4,0,2]]
  },
  {
    text: 'Grade Distribution',
    options: [{value:1, label:'Uniform'}, {value:2, label:'Gradational'}, {value:3, label:'Erratic'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,3,4,3,4,4,3,2,2,0],[3,2,4,2,1,2,2,3,1,1],[2,2,3,2,0,0,2,4,1,3]]
  },
  {
    text: 'Depth',
    options: [{value:1, label:'Shallow'}, {value:2, label:'Intermediate'}, {value:3, label:'Deep'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[4,2,3,3,2,3,3,2,2,1],[0,3,4,2,2,3,3,3,1,1],[-49,3,2,2,3,2,2,4,1,2]]
  }
]
const rmrselectOptions = [
  {
    text: 'Ore Zone',
    options: [{value:1, label:'Very Weak'}, {value:2, label:'Weak'}, {value:3, label:'Moderate'}, {value:4, label:'Strong'}, {value:5, label:'Very Strong'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[2,3,-49,4,6,-49,0,3,0,4],[3,3,0,4,5,0,0,5,0,4],[4,3,3,3,4,3,2,4,2,1],[4,2,4,2,3,5,4,3,3,0],[4,2,4,2,3,6,4,3,3,0]]
  },
  {
    text: 'Hanging Wall',
    options: [{value:1, label:'Very Weak'}, {value:2, label:'Weak'}, {value:3, label:'Moderate'}, {value:4, label:'Strong'}, {value:5, label:'Very Strong'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,4,1,3,6,-49,0,0,3,4],[3,3,3,4,6,0,1,1,2,4],[3,2,4,3,4,3,3,2,1,1],[3,0,4,1,2,5,3,3,1,0],[3,-49,4,0,2,6,3,3,0,0]]
  },
  {
    text: 'Foot Wall',
    options: [{value:1, label:'Very Weak'}, {value:2, label:'Weak'}, {value:3, label:'Moderate'}, {value:4, label:'Strong'}, {value:5, label:'Very Strong'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[2,3,0,1,0,0,0,3,0,3],[3,3,0,2,0,0,0,3,0,1],[4,3,2,3,0,0,2,2,1,0],[4,2,3,3,0,0,3,2,2,0],[4,2,3,3,0,0,3,2,2,0]]
  }
]
const rssselectOptions = [
  {
    text: 'Ore Zone',
    options: [{value:1, label:'Very Weak'}, {value:2, label:'Weak'}, {value:3, label:'Moderate'}, {value:4, label:'Strong'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,4,0,4,6,0,0,3,3,4],[3,3,1,3,5,0,1,5,2,2],[4,2,4,2,2,2,3,4,2,1],[4,0,5,1,2,6,4,2,2,0]]
  },
  {
    text: 'Hanging Wall',
    options: [{value:1, label:'Very Weak'}, {value:2, label:'Weak'}, {value:3, label:'Moderate'}, {value:4, label:'Strong'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[4,4,0,2,6,0,0,0,3,4],[3,2,2,3,5,0,1,1,2,3],[3,1,4,3,2,3,3,3,1,1],[3,0,4,2,1,6,4,4,0,0]]
  },
  {
    text: 'Foot Wall',
    options: [{value:1, label:'Very Weak'}, {value:2, label:'Weak'}, {value:3, label:'Moderate'}, {value:4, label:'Strong'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,4,0,1,0,0,0,1,2,3],[3,3,1,2,0,0,2,3,2,2],[4,2,3,2,0,0,3,2,1,0],[4,1,3,2,0,0,3,2,1,0]]
  }
]
const minMethods=['Open Pit','Block Caving','Sublevel Stoping','Sublevel Caving','Longwall','Room & Pillar','Shrinkage Stoping','Cut & Fill','Top Slicing','Square Set']
var def=Array(20)
  for(var i=0; i<20; i++) def[i]=0

const getColor = (selected, idx) => {
  if(idx === 0 || idx === 39) return "red"
  if(selected === 2) return ((idx & 1 ) ? "red" : "white")
  if(selected === 3) return ((Math.random() * 2) >= 1) ? "red" : "white"
  return "red"
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      selected: def,
      scores:[0,0,0,0,0,0,0,0,0,0],
      showResult: false
    }
  }

  handleShowResult = () => this.setState({showResult: true})
  
  handleChange=(i,v,fieldScores) => {
    var newSelected=this.state.selected
    var scores=this.state.scores
    for (var j=0;j<10;j++) scores[j]+=fieldScores[v][j]-fieldScores[this.state.selected[i]][j] 
    newSelected[i]=v
    console.log(scores)
    this.setState({selected:newSelected,scores})
  }
  generateRes=()=>{
    var methods=[]
    for (var i=0;i<10;i++) methods.push({name:minMethods[i],score:this.state.scores[i]})
    methods.sort((a,b)=>b.score-a.score)
    return methods
  }

  render(){
  return (
    
    <div className='body'>
      
      <Container>
        <Row className="Head"><strong>Mining Method Selection Tool</strong></Row> 
        <Row className="FRows">
          <Col className="columns"><h3>Orebody Characteristics </h3></Col>
          <Col className="columns"><h3>Orebody Illustration</h3></Col>
          <Col className="columns"><h3>Mining Methods Ranking</h3></Col>
        </Row>
        <Row className="rows">
          <Col className="columns">
          
            <Row><div className="rows1">Geometry and Grade Distribution
              { 
                gngselectOptions.map((field,idx)=>(
                  <div className = "select-row">
                    <div className = "fluid-container">
                      <h5 className = "select-text"><strong>{field.text}</strong></h5>
                      <Select className="box" value={field.options[this.state.selected[0+idx]-1]} onChange={(selectedOption)=>this.handleChange(0+idx,selectedOption.value,field.scores)} options={field.options}/>
                      
                      
                    </div>
                  </div>
                ))
              }        
            {console.log(this.state.selected)}
            </div></Row>            
            <Row>
              <div className="rows1" >Rock Mass Rating{
                rmrselectOptions.map((field,idx)=>(
                  <div className = "select-row">
                    <div className = "fluid-container">
                      <h5 className = "select-text"><strong>{field.text}</strong></h5>
                      <Select className="box" value={field.options[this.state.selected[6+idx]-1]} onChange={(selectedOption)=>this.handleChange(6+idx,selectedOption.value,field.scores)} options={field.options}/>
                    </div>
                  </div>
                ))
              }
            </div></Row>
            <Row>
              <div className="rows1" >Rock Substance Strength{
                rssselectOptions.map((field,idx)=>(
                  <div className = "select-row">
                    <div className = "fluid-container">
                      <h5 className = "select-text"><strong>{field.text}</strong></h5>
                      <Select className="box" value={field.options[this.state.selected[11+idx]-1]} onChange={(selectedOption)=>this.handleChange(11+idx,selectedOption.value,field.scores)} options={field.options}/>
                    </div>
                  </div>
                ))
              }
            </div></Row>
                      
          </Col>
          
          <Col className="columns" style = {{position: "relative"}}>
            <Row>
              <img src={surface} alt = "Surface" />
            </Row>
            <Row style = {{
              position: "absolute", 
              top: 155 + (this.state.selected[4] === 2 ? 100 : (this.state.selected[4] === 3 ? 200 : 10)),
              transform: `rotate(-${this.state.selected[2] < 2 ? 15 : (this.state.selected[2] === 2 ? 45 : 85)}deg)`
              }}>
              <Row><img src = {rock} alt = "Rock" /></Row>
              <Row>
                <div style = {{
                  width:450,
                  height: (this.state.selected[1] ? this.state.selected[1] * 20 : 75),
                }}>
                  {[...Array(40).keys()].map(idx => (
                    <div style = {{
                      display: 'inline-block',
                      width: 10,
                      backgroundColor: getColor(this.state.selected[3], idx),
                      height: (this.state.selected[1] ? this.state.selected[1] * 20 : 75),
                    }} />
                  ))}
                </div>
              </Row>
              <Row><img src = {rock} alt = "Rock" /></Row>
            </Row>
          </Col>
          <Col className="columns3">
            {this.generateRes().map(method=>(
              <Row>
                <div>

                  {`${method.name} (${method.score})`}

                </div>
                <hr/>
                </Row>
            )
              )}
          </Col>
        </Row>
      </Container>
      <Button onClick = {this.handleShowResult}>Show Result</Button>
      {
        this.state.showResult ? 
        <div className = "result" style = {{height: 600, backgroundColor: "red"}}>
          
        </div> : <></>
      }
    </div>
  );
}
}
export default App;
