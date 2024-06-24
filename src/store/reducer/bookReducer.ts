import { Books } from "../../interface/interface";
// khởi tạo state

// const initialBook:Book[]=[] = JSON.parse(localStorage.getItem("book")||"[]");

const initialBook:Books[]=[
    {
        id:1,
        name:"lật mặt 7",
        borrow:"24/06/2024",
        pay:"25/06/2024",
        student:"Trang",
        status:true,
    },
    {
        id:2,
        name:"lật mặt 8",
        borrow:"21/06/2024",
        pay:"23/06/2024",
        student:"Huyền Trang",
        status:false,
    },
    {
        id:3,
        name:"lật mặt 6",
        borrow:"20/01/2024",
        pay:"05/02/2024",
        student:"Hà Trang",
        status:false,
    }
]

// tạo hàm tính toán
// chức năng

export const bookReducer=(state=initialBook,action:any)=>{
    switch(action.type){
        case "ADD_BOOK":
            return [...state];
        case "DELETE_BOOK":
            for(let i =0; i<state.length;i++){
                if(state[i].id=action.payload){
                    const confirmDelete= window.confirm("bạn có chắc chắn muốn xóa thông tin không?")
                    if(confirmDelete){
                        state.splice(i, 1)
                        break;
                    }else{
                        console.log("hủy");
                        break;
                    }
                }
            }
            return [...state];
        case "UPDATE_STATUS":
            // lấy ra id, tìm vị trí, update
            // console.log(action.payload);
            for(let i=0;i<state.length;i++ ){
                if(state[i].id===action.payload){
                    state[i].status=!state[i].status
                }
            }
            return [...state];
        case "UPDATE_BOOK":
            return [...state];
        default:
            return state;
    }
}