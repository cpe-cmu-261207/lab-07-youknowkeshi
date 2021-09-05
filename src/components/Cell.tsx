import { PixelPainterStore, setCellCol } from "../stores/PixelPainterStore"

type CellProps = {
  x: number;
  y: number;
}

const Cell = ({ x, y }: CellProps) => {

  const state = PixelPainterStore.useState()

  return (
    <td className="w-6 h-6 cursor-pointer" 
    onClick={()=>setCellCol(y,x)}
    onDrag={()=>setCellCol(y,x)}
    style={{backgroundColor: state.canvas[y][x]}}>
    </td>
  )
}

export default Cell