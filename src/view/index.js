import React, {useEffect, useState} from 'react';
import Category from './Category';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../store/actions";
import {FINAL_DATA} from '../constants/StaticRrcords';

export default function Index() {
    const dispatch = useDispatch();
    const allQuestionsList = useSelector(state => state.allQuestionsList);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=> {
        dispatch(Actions.setAllQuestions(FINAL_DATA));
    },[]);

    useEffect(()=>{
        setCategoryList(allQuestionsList);
    },[allQuestionsList]);

    return (
        <div className="App">
            <Category category={categoryList}/>
        </div>
    );
}