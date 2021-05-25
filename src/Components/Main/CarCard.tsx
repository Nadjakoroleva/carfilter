import React from 'react';
import { CarLogo, Info, CarContainer } from '../../styles/carStyle';
import { CarInfo } from '../../types/interfaces';


const CarCard: React.FC<{car: CarInfo}> = ({car}) => {
    return (
        <CarContainer>
            <CarLogo src={car.logo} alt="" />
            <Info>
                <li>Бренд: {car.brand}</li>
                <li>Модель: {car.model}</li>
                <li>Год: {car.year}</li>
                <li>Топливо: {car.fuel}</li>
                <li>Кузов: {car.bodyType}</li>
                <li>Цена: {car.price + ' рублей'}</li>
            </Info>
        </CarContainer>
    );
};

export default CarCard;

