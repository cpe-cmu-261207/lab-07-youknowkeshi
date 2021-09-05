import {Store} from 'pullstate'


type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][],
  selectCol:string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

const randomColor = () =>{
  var color = ['#000000','#804000','#FE0000','#FE6A00','#FFD800','#00FF01','#FFFFFF','#01FFFF','#0094FE','#0026FF','#B100FE','#FF006E'] 
  const output:string[][]=[];
  for(let i=0;i<16;i++){
    output[i]=[];
    for(let j=0;j<16;j++){
      output[i].push(color[Math.floor(Math.random()*12)%12])
    }
  }
  return output;
}
export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas:createEmptyCanvas(),
  selectCol:'#FFFFFF'
})

export const setSelectedCol = (color:string) =>{
  PixelPainterStore.update(e=>{
    e.selectCol = color;
  })
}

export const Clear = () =>{
  PixelPainterStore.update(e=>{
    e.canvas = createEmptyCanvas();
  })
}
export const randomCol = () =>{
  PixelPainterStore.update(e=>{
    e.canvas = randomColor();
  })
}
export const setCellCol = (i:number,j:number) =>{
  PixelPainterStore.update(e=>{
    e.canvas[i][j] = e.selectCol;
  })
}