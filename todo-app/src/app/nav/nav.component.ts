import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray } from '@angular/forms';
import {BoardService} from '../mainview/board.service'
import { faCoffee,faTrash,faPenToSquare,faPlus ,faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
declare var $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private boadService:BoardService){}
  ngOnInit() {
   
  }
  faPlus=faPlus
  faExclamationCircle=faExclamationCircle
  boardForm:FormGroup = new FormGroup(
   { 
    'name': new FormControl(),
    'category': new FormControl(),
    'tasks': new FormArray([])
    
  })


  onSubmit()
  { 
    // let tasksDataArr = []
    // const tasksArr = this.boardForm.value.tasks
    // for(let x= 0 ; x <tasksArr.length;x++)
    // {
    //   tasksDataArr.push(tasksArr[x].task)
    //   console.log(tasksDataArr)
    // }
    // const propertyValues = this.boardForm.value.tasks.values(task);

    console.log(this.boardForm)
  this.boadService.addBoard(this.boardForm.value)
  this.boardForm.reset();
  (this.boardForm.get('tasks') as FormArray).clear()

    // $('#exampleModal').modal('hide');
    // $('#exampleModal').modal('show');
    // $('#exampleModal').modal('toggle');
     
  }
  get tasks(): FormArray {


 
    return this.boardForm.get('tasks') as FormArray;
  } // مهمه فشخ في form array

  addTask()
  {
    (<FormArray>this.boardForm.get('tasks')).push(
      new FormGroup({
        'task':new FormControl()
        
      })
    )
      // console.log((<FormArray>this.boardForm.get('tasks')))
  }
  deleteTask(id:number)
  {
    (<FormArray>this.boardForm.get('tasks')).removeAt(id)
  }

  close()
  {
    this.boardForm.reset();
    (this.boardForm.get('tasks') as FormArray).clear()
    
  }
}
