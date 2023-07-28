import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pending: Lorem ipsum dolor sit amet, consectetur adip',
      status: 'pending',
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'In-progress: Lorem ipsum dolor sit amet, consectetur adip',
      status: 'in-progress',
      createAt: Date.now() - 10000,
    },
    {
      _id: uuidv4(),
      description: 'Finished: Lorem ipsum dolor sit amet, consectetur adip',
      status: 'finished',
      createAt: Date.now() - 1000000,
    }
  ],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: 'pending',
    }

    dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
  }

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry,
    }}>
      {children}
    </EntriesContext.Provider>
  )
}