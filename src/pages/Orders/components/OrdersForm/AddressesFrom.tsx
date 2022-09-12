import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { FormAddresses } from './styles';

interface ErrorType {
    errors: {
        [key: string]: {
            message: string;
        };
    };
}

export function AddressesForm() {
    const { register, formState } = useFormContext();
    const { errors } = formState as unknown as ErrorType;

    return (
        <FormAddresses>
            <Input
                type="number"
                placeholder="CEP"
                className="cep"
                {...register('cep')}
                error={errors.cep?.message}
            />
            <Input
                type="number"
                placeholder="Rua"
                {...register('street')}
                error={errors.number?.message}
            />
            <Input
                type="number"
                placeholder="Número"
                {...register('number')}
                error={errors.number?.message}
            />
            <Input
                type="number"
                placeholder="Complemento"
                className="complement"
                {...register('complement')}
                error={errors.complement?.message}
            />
            <Input
                type="text"
                placeholder="Bairro"
                {...register('district')}
                error={errors.district?.message}
            />
            <Input
                type="text"
                placeholder="Cidade"
                {...register('city')}
                error={errors.city?.message}
            />
            <Input
                type="text"
                placeholder="Estado"
                {...register('uf')}
                error={errors.uf?.message}
            />
        </FormAddresses>
    );
}
