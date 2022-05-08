import './App.css';
import surface from './surface.png';
import rock from './rock.jpg'
import Select from 'react-select'
import React from 'react'
import {Container,Row,Col,Button,Table,OverlayTrigger,Tooltip} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const erratic = ['red', 'white', 'white', 'red', 'red', 'red', 'white', 'white', 'red', 'red', 'white', 'red', 'white', 'white', 'red', 'red', 'white', 'white', 'white', 'red', 'white', 'white', 'red', 'red', 'red', 'white', 'red', 'white', 'red', 'red', 'red', 'white', 'white', 'red']
const gngselectOptions = [
  {
    text: 'General Shape',
    options: [{value:1, label:'Massive'}, {value:2, label:'Platy/Tubular'}, {value:3, label:'Irregular'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[4,4,3,3,-49,0,0,1,1,0],[2,2,4,4,4,4,4,4,2,1],[3,0,1,1,-49,2,2,4,0,4]]
  },
  {
    text: 'Ore Thickness',
    options: [{value:1, label:'Very Narrow (< 3m)'}, {value:2, label:'Narrow (3m - 10m)'}, {value:3, label:'Intermediate (10m - 30m)'}, {value:4, label:'Thick (30m - 100m)'}, {value:5, label:'Very Thick (>100m)'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[1,-49,-10,-49,4,4,4,3,1,4],[2,-49,1,-49,3,3,4,4,1,3],[3,0,3,0,0,1,0,4,0,2],[4,3,4,4,-49,-49,-49,1,2,0],[4,3,4,4,-49,-49,-49,0,1,0]]
  },
  {
    text: 'Ore Plunge',
    options: [{value:1, label:'Flat (<20)'}, {value:2, label:'Intermediate (20-50)'}, {value:3, label:'Steep (>50)'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,3,2,1,4,4,-49,1,4,2],[3,2,1,1,0,0,0,3,2,3],[1,4,4,4,-49,-49,4,4,0,2]]
  },
  {
    text: 'Grade Distribution',
    options: [{value:1, label:'Uniform'}, {value:2, label:'Gradational'}, {value:3, label:'Erratic'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,3,4,3,4,4,3,2,2,0],[3,2,4,2,1,2,2,3,1,1],[2,2,3,2,0,0,2,4,1,3]]
  },
  {
    text: 'Depth',
    options: [{value:1, label:'Shallow (0m - 100m)'}, {value:2, label:'Intermediate (100m - 600m)'}, {value:3, label:'Deep (>600m)'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[4,2,3,3,2,3,3,2,2,1],[0,3,4,2,2,3,3,3,1,1],[-49,3,2,2,3,2,2,4,1,2]]
  }
]
const rmrselectOptions = [
  {
    text: 'Ore Zone',
    options: [{value:1, label:'Very Weak (0-20)'}, {value:2, label:'Weak (20-40)'}, {value:3, label:'Moderate (40-60)'}, {value:4, label:'Strong (60-80)'}, {value:5, label:'Very Strong (80-100)'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[2,3,-49,4,6,-49,0,3,0,4],[3,3,0,4,5,0,0,5,0,4],[4,3,3,3,4,3,2,4,2,1],[4,2,4,2,3,5,4,3,3,0],[4,2,4,2,3,6,4,3,3,0]]
  },
  {
    text: 'Hanging Wall',
    options: [{value:1, label:'Very Weak (0-20)'}, {value:2, label:'Weak (20-40)'}, {value:3, label:'Moderate (40-60)'}, {value:4, label:'Strong (60-80)'}, {value:5, label:'Very Strong (80-100)'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,4,1,3,6,-49,0,0,3,4],[3,3,3,4,6,0,1,1,2,4],[3,2,4,3,4,3,3,2,1,1],[3,0,4,1,2,5,3,3,1,0],[3,-49,4,0,2,6,3,3,0,0]]
  },
  {
    text: 'Foot Wall',
    options: [{value:1, label:'Very Weak (0-20)'}, {value:2, label:'Weak (20-40)'}, {value:3, label:'Moderate (40-60)'}, {value:4, label:'Strong (60-80)'}, {value:5, label:'Very Strong (80-100)'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[2,3,0,1,0,0,0,3,0,3],[3,3,0,2,0,0,0,3,0,1],[4,3,2,3,0,0,2,2,1,0],[4,2,3,3,0,0,3,2,2,0],[4,2,3,3,0,0,3,2,2,0]]
  }
]
const rssselectOptions = [
  {
    text: 'Ore Zone',
    options: [{value:1, label:'Very Weak (< 5)'}, {value:2, label:'Weak (5-10)'}, {value:3, label:'Moderate (10-15)'}, {value:4, label:'Strong (>15)'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,4,0,4,6,0,0,3,3,4],[3,3,1,3,5,0,1,5,2,2],[4,2,4,2,2,2,3,4,2,1],[4,0,5,1,2,6,4,2,2,0]]
  },
  {
    text: 'Hanging Wall',
    options: [{value:1, label:'Very Weak (< 5)'}, {value:2, label:'Weak (5-10)'}, {value:3, label:'Moderate (10-15)'}, {value:4, label:'Strong (>15)'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[4,4,0,2,6,0,0,0,3,4],[3,2,2,3,5,0,1,1,2,3],[3,1,4,3,2,3,3,3,1,1],[3,0,4,2,1,6,4,4,0,0]]
  },
  {
    text: 'Foot Wall',
    options: [{value:1, label:'Very Weak (< 5)'}, {value:2, label:'Weak (5-10)'}, {value:3, label:'Moderate (10-15)'}, {value:4, label:'Strong (>15)'}],
    scores: [[0,0,0,0,0,0,0,0,0,0],[3,4,0,1,0,0,0,1,2,3],[3,3,1,2,0,0,2,3,2,2],[4,2,3,2,0,0,3,2,1,0],[4,1,3,2,0,0,3,2,1,0]]
  }
]
const methodDescriptions = [`Open-pit mining, also known as open-cast or open-cut mining, or mega-mining in bigger contexts, is a surface mining process for removing rock or minerals from the soil from an open-air pit, commonly referred to as a borrow. Miners must first gather the information about the subsurface mineral in order to build an open-pit mine. This is accomplished by drilling probe holes in the ground and then plotting the location of each hole on a map. The information obtained through the holes will give an estimate of the ore's vertical extension. This vertical data is then utilised to determine the approximate positions of the mine's benches. The quality and economic worth of the ore in the possible pit must be considered.`,
`Disintegration of ore and country rock takes use of inherent cracks in the rockmasses, stress distribution around the cave domain border, restricted rockmass strength, and the gravitational field's tendency to push unstable blocks from the cave border in block caving. This approach differs from the others thus far in that the major fragmentation is accomplished by natural mechanical mechanisms. Block caving seems to be a type of mass mining that may produce large amounts of material at a cheap cost per tonne. It can only be used on big orebodies with a height of more than 100 metres. `, 
`Sublevel open stopping necessitates considerable preproduction development in and around the orebody. Stope faces and side walls remain unsupported throughout ore extraction, whereas pillars created by stopping provide support for the country rock. In vast or steeply sloping stratiform orebodies, sublevel open stopping is used. In order to encourage free flow of rock through the stope to the extraction horizon for an inclined orebody, the slope of the stope footwall must exceed the angle of repose of the fractured rock. Because stopes are unsupported in these methods, the orebody and surrounding rockmass must be strong enough to produce sturdy walls, faces, and crowns for stope excavations.`, 
`Sublevel caving is a real caving method that aims to liberate the country rock overlaying an orebody. In an orebody, mining moves downwards, extracting each sublevel as it is mined. The formation of the caving rockmass and the arrangement of the drill heads are crucial parts of the mining process because gravity flow of the fractured ore rock affects the eventual output. Sublevel caving is best suited to steeply dipping orebodies with relatively strong orebody rock surrounded by weaker overlaying and wall rocks. The average grade must be high enough to withstand dilution to levels perhaps more than 20%.`, 
`Longwall mining is most effective in thin ore deposits with a broad horizontal extent. Ground support is utilised to keep the excavation aperture close to the face as the hangingwall behind the excavation subsides. This approach may be utilised for both hard rock metal ore mining and soft rock coal mining. The approach preserves continuous behaviour in the far-field rock in both circumstances. An orebody must have a grade distribution that is reasonably consistent and dips less than 20°.`, 
`In order to regulate the stability of the roof rock and the global reaction of the surrounding rockmass, room and pillar mining produces ore pillars as remains as extraction continues. Regular pillar patterns are usually created to make planning, design, and operation easier. Depending on the competence of the rockmass, the roof may or may not be artificially supported for worker safety. Pillars can either be left in place after the mine is closed or extracted at the end of the mine's life, enabling the stope to collapse.`, 
`Shrink (or shrinkage) stopping includes vertical or subvertical mining advancement in a stope, where fragmented ore serves as a working platform as well as temporary support for the stope walls. This approach is similar to cut-and-fill stopping, in which the fragmented ore performs the same role as cut-and-fill backfill. It's usually used on relatively narrow extraction blocks that haven't been suited to a lot of automation in the past. For shrink stopping, the appropriate orebody type, orientation, geomechanical parameters, and setting are nearly identical to those for cut-and-fill.`, 
`Cut-and-fill mining is a highly adaptable technique that may be used on any orebody. It's an extremely selective mining technique that usually moves up-dip in an inclined orebody. In comparison to other technologies, mining costs are quite high; recovery is likewise high, and dilution is minimal. As a result, it's a good choice for high-grade orebodies. Cut-and-fill mining is a highly regulated mining cycle that is done several times in a single deposit.`, 
`Top slicing is the process of processing an orebody in horizontal slices, starting at the top. Haulage levels are developed at regular intervals, and rises are built from these to the top of the orebody every 50 feet. Drifts are run out from the tops of these increases, then the slice is worked back by breast stopping as you retreat toward the raise. Until a slice, or portion of a slice, has been exploited, the overburden or capping that lies above the ore is supported by square sets or posts.`, 
`Any form of stopping that uses square-set timbers is known as square-set stopping. The word is confined to overhand flat-back stopes with square sets, either with or without waste filling, unless otherwise indicated. When the vein is wide and the walls cannot be supported without timbering, and shrinkage stopping is not an option; when caving is not possible due to surface conditions, or where caving could result in the loss of other orebodies; when the ore changes rapidly in grade and requires frequent sampling; when the orebody is irregular in outline; and when old stopes may need to be approached or passed through at a later date.`];
const minMethods=['Open Pit','Block Caving','Sublevel Stoping','Sublevel Caving','Longwall','Room & Pillar','Shrinkage Stoping','Cut & Fill','Top Slicing','Square Set']
var def=Array(20)
  for(var i=0; i<20; i++) def[i]=0
  

const getColor = (selected, idx) => {
  if(idx === 0 || idx === 32) return "red"
  if(selected === 2) return ((idx & 1 ) ? "red" : "white")
  if(selected === 3) return erratic[idx]
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
  
  toggleShowResult = () => this.setState({showResult: !this.state.showResult})


  handleChange=(i,v,fieldScores) => {
    var newSelected=this.state.selected
    var scores=this.state.scores
    for (var j=0;j<10;j++) scores[j]+=fieldScores[v][j]-fieldScores[this.state.selected[i]][j] 
    newSelected[i]=v
    this.setState({selected:newSelected,scores})
  }


  generateRes=()=>{
    var methods=[]
    for (var i=0;i<10;i++) methods.push({name:minMethods[i],score:this.state.scores[i],description:methodDescriptions[i]})
    methods.sort((a,b)=>b.score-a.score)
    return methods
  }


  render(){
  return (
    <div className='body'>     
    { this.state.showResult ? 
      <>
        <div className="button" ><Button className="btn" onClick = {this.toggleShowResult}>Hide Result</Button></div>        
        {/* <div className="Introduction">Introduction</div> */}
        <Container>
          <Col>
          <Row className="Head"><strong>Selected</strong></Row>
          {gngselectOptions.map((field, idx) => (
            <div className = "select-row">
                <strong>{field.text}</strong> : {this.state.selected[0+idx] > 0 ? field.options[this.state.selected[0+idx]-1].label : "Not Selected"}
            </div>
          ))}
          {rmrselectOptions.map((field, idx) => (
            <div className = "select-row">
                <strong>{field.text}</strong> : {this.state.selected[6+idx] > 0 ? field.options[this.state.selected[6+idx]-1].label : "Not Selected"}
            </div>
          ))}
          {rssselectOptions.map((field, idx) => (
            <div className = "select-row">
                <strong>{field.text}</strong> : {this.state.selected[11+idx] > 0 ? field.options[this.state.selected[11+idx]-1].label : "Not Selected"}
            </div>
          ))}
          </Col>
          <Col>
          <Row className="Head"><strong>Mining Methods</strong></Row>
          <Table bordered className="table" size="sm">
          <thead><tr><th>Sl.No</th> <th>Method</th> <th>Scores</th></tr></thead>
          {this.generateRes().map((method, idx)=>(
              <tbody> 
                <tr>
                  <td>{idx+1}</td> <td>{method.name}</td> <td>{method.score}</td>
                </tr>
              </tbody>
            ))}
          </Table>
          </Col>
        </Container>
        <Container>
        <h4>Top 3 Methods</h4>
        {this.generateRes().map((method, idx) => {
        if(idx > 2) return <></>
        else return (
        <div>
          <h5>{method.name}</h5>
          <p style = {{textAlign: "justify"}}>{method.description}</p></div>
        )})}
        </Container>
        {/* <div className="Disclaimer">Disclaimer</div> */}
        <div className="button" ><Button className="btn" onClick = {() => {
          window.print();
          return false;
        }}>Print Result</Button></div>
      </>
      :
      <>
      <Container>     
        <div className="Head"><strong>Mining Method Selection Tool</strong>
        {/* <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={this.renderTooltip}
        >
          <Button variant="success"></Button>
        </OverlayTrigger> */}
        </div>
        <Row className="rows" lg = {3} md = {1} sm = {1}>
        <Col className="rcol">
          <Row className="FRows">
            <Col><h3>Orebody Characteristics </h3></Col>
          </Row>
          <Row className="rows">
          <Col className="cr11">         
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
            {/* {console.log(this.state)} */}
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
          </Row>
        </Col>
        <Col className="rcol">
          <Row className="FRows">
            <Col><h3>Orebody Illustration</h3></Col>
          </Row>
          <Row className="rows">
          <Col className="columns2" style = {{position: "relative"}}>
            <Row>
              <img src={surface} alt = "Surface" />
            </Row>
            <Row style = {{
              position: "absolute", 
              top: 152 + (this.state.selected[4] === 2 ? 75 : (this.state.selected[4] === 3 ? 120 : 10)),
              marginLeft: "auto",
              marginRight: "auto",
              transform: `rotate(-${this.state.selected[2] < 2 ? 15 : (this.state.selected[2] === 2 ? 35 : 75)}deg)`
              }}>
              <Row><img style={{width:370}} src = {rock} alt = "Rock" /></Row>
              <Row>
                <div style = {{
                  width:370,
                  height: (this.state.selected[1] ? this.state.selected[1] * 20 : 60),
                }}>
                  {[...Array(33).keys()].map(idx => (
                    <div style = {{
                      display: 'inline-block',
                      width: 10,
                      backgroundColor: getColor(this.state.selected[3], idx),
                      height: (this.state.selected[1] ? this.state.selected[1] * 20 : 60),
                    }} />
                  ))}
                </div>
              </Row>
              <Row><img style={{width:370}} src = {rock} alt = "Rock" /></Row>
            </Row>
          </Col>
          </Row>
        </Col>
        <Col className="rcol">
          <Row className="FRows">
          <Col><h3>Mining Methods Ranking</h3></Col>
          </Row>
          <Row className="rows">
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
        </Col>
        </Row>
      </Container>
      <div className="button" ><Button className="btn" onClick = {this.toggleShowResult}>Show Result</Button></div>
    </>
    }
    </div>
  );
}
}
export default App;