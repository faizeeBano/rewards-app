import TransactionContainer from './TransactionContainer';
import CustomerContainer from './CustomerContainer';
import Loading from './common/Loading';
import useFetch from '../hooks/useFetch';

export default function Main() {
  const { transactions, loading, error } = useFetch();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className='text'>{error}</p>;
  }

  if (transactions.length === 0) {
    return <p className="text">Data Not Available</p>;
  }

  return (
    <>
      <TransactionContainer />
      <CustomerContainer />
    </>
  )
}
