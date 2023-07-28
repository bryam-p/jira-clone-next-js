import React, { ChangeEvent, useContext, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSave = () => {
    if (inputValue.length === 0) return

    addNewEntry(inputValue)
    setIsAddingEntry(false);
    setTouched(false);
    setInputValue('');
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {
        isAddingEntry ? (
          <>
            <TextField
              fullWidth
              sx={{ marginTop: 2, marginBottom: 1 }}
              placeholder='Nueva entrada'
              autoFocus
              multiline
              error={inputValue.length <= 0 && touched}
              label='Nueva entrada'
              helperText='Ingrese un valor'
              onChange={onTextFieldChange}
              onBlur={() => setTouched(true)}
            >

            </TextField>
            <Box display='flex' justifyContent='space-between'>
              <Button onClick={() => setIsAddingEntry(false)} variant="text" >Cancelar</Button>
              <Button
                onClick={() => onSave()}
                variant='outlined'
                color='secondary'
                startIcon={<SaveOutlinedIcon />}
              >
                Guardar
              </Button>
            </Box>
          </>
        ) : (
          <Button
            variant='outlined'
            startIcon={<AddCircleOutlineOutlinedIcon />}
            fullWidth
            onClick={() => setIsAddingEntry(true)}
          >
            Agregar Tarea
          </Button>
        )
      }
    </Box>
  )
}
