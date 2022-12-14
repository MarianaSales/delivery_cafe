import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { OrdersForm } from './components/OrdersForm';
import { SelectedItems } from './components/SelectedItems';
import { OrdersContainer } from './styles';

enum PaymentMethods {
    credit = 'credit',
    debit = 'debit',
    money = 'money',
}

const confirmOrderValidationSchema = zod.object({
    city: zod.string().min(1, 'Informe sua Cidade'),
    uf: zod.string().min(1, 'Informe seu Estado'),
    district: zod.string().min(1, 'Informe seu bairro'),
    cep: zod.string().min(1, 'Informe seu CEP'),
    street: zod.string().min(1, 'Informe a rua'),
    number: zod.string().min(1, 'Informe o número'),
    complement: zod.string().optional(),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return {
                message: 'Informe o método de pagamento',
            };
        },
    }),
});

export type OrdersData = zod.infer<typeof confirmOrderValidationSchema>;

type ConfirmOrdersFormData = OrdersData;

export function Orders() {
    const confirmOrdersForm = useForm<ConfirmOrdersFormData>({
        resolver: zodResolver(confirmOrderValidationSchema),
    });
    const { handleSubmit } = confirmOrdersForm;
    const navigate = useNavigate();
    const { cleanPurchase } = useContext(CartContext);

    function handleConfirmOrder(data: ConfirmOrdersFormData) {
        navigate('/orderConfirmed', {
            state: data,
        });
        cleanPurchase();
    }

    return (
        <FormProvider {...confirmOrdersForm}>
            <OrdersContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <OrdersForm />
                <SelectedItems />
            </OrdersContainer>
        </FormProvider>
    );
}
