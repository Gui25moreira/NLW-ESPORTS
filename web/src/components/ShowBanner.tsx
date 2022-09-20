import {Check, GameController, MagnifyingGlassPlus} from 'phosphor-react'
import*as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { Input } from './Form/input';
import { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';

interface Game{
    id: string;
    title: string;
  }


export function CreateAdModal(){

  useEffect(()=>{
    axios('http://localhost:3334/games')
    .then(response => {
     setGames(response.data)
    }); 
    
  }, [])