
import { useSelector } from 'react-redux'

function HeaderB() {
  const {remain} = useSelector(state => state.moneyChange)
  let formatter = new Intl.NumberFormat('tr-TR');
  let remainSeperated = formatter.format(remain);
  return (
    <div className='remain'> ${remainSeperated} </div>
  )
}

export default HeaderB