import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Books } from '../interface/interface';

export default function Book() {
    // lấy data
    const data:any =useSelector(state=>state);
    console.log(data);
    // update trạng thái
    const disPatch = useDispatch();
    const handleUpdateStatus=(id:number)=>{
        console.log(id);
        disPatch({
           type:"UPDATE_STATUS",
            payload:id, 
        })
    }
    const handleDeleteState=(id:number)=>{
        console.log("delete",id);
        disPatch({
            type:"DELETE_BOOK",
            payload:id,
        })
    }
    const handleAddState=()=>{
        
    }
  return (
    <div>Book
        <br />
        <button onClick={handleAddState}>Thêm thông tin</button>
        <table border={1}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sách</th>
                    <th>Người mượn</th>
                    <th>Ngày mượn</th>
                    <th>Ngày trả</th>
                    <th>Trạng thái</th>
                    <th>chức năng</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.bookReducer.map((book:Books,index:number)=>{
                        return(
                            <tr key={book.id}>
                                <td>{index+1}</td>
                                <td>{book.name}</td>
                                <td>{book.student}</td>
                                <td>{book.borrow}</td>
                                <td>{book.pay}</td>
                                <td onClick={()=>handleUpdateStatus(book.id)}>{book.status?<button>đã trả</button>: <button>chưa trả</button>}</td>
                                
                                <td>
                                    <button>sửa</button>
                                    <button onClick={()=>handleDeleteState(book.id)}>xóa</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
