import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
}));

const SortSelect: React.FC = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const currentCarList = useTypedSelector(state => state.currentCarList).currentCarList;

    return (
        <FormControl className={classes.formControl}>
            <Select native onChange={event => {dispatch({type: event.target.value, payload: currentCarList})}}>
                <option value='SORT_BY_REDUCE_YEAR'>Сначала новые</option>
                <option value='SORT_BY_INCREASE_YEAR'>Сначала старые</option>
                <option value='SORT_BY_INCREASE_PRICE'>Возрастание цены</option>
                <option value='SORT_BY_REDUCE_PRICE'>Убывание цены</option>
            </Select>
        </FormControl>
    );
};

export default SortSelect;