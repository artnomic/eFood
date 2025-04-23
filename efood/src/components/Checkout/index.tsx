import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import Cart from '../Cart'

import { close } from '../../store/reducers/checkout'
import { clear } from '../../store/reducers/cart'

import { MaisDetalhes as Button } from '../Product/style'
import { CartContainer, Overlay, Sidebar } from '../Cart/styles'
import {
  CardInfos,
  FormInfo,
  Header,
  Options,
  PersonalInfos,
  ThanksInfos
} from './styles'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { formatCurrencies, getTotalPrice } from '../../utils'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [isInPaymentStep, setIsInPaymentStep] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

  const closeCheckout = () => {
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      name: '',
      cardNumber: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa ter no mínimo 3 letras')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(10, 'O endereço precisa ter no mínimo 10 letras')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter no mínimo 3 letras')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP precisa ter 8 dígitos')
        .max(9, 'O CEP precisa ter 8 dígitos')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .max(7, 'O número está longo demais')
        .required('O número é obrigatório'),
      complement: Yup.string().max(150, 'O complemento está longo demais'),
      name: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      code: Yup.string().required('O campo é obrigatório'),
      month: Yup.string().required('O campo é obrigatório'),
      year: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.name,
            number: values.cardNumber,
            code: Number(values.code),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToCart = () => {
    setShowCart(true)
  }

  if (showCart) return <Cart />

  const goToPaymentStep = async () => {
    const deliveryFields = [
      'receiver',
      'description',
      'city',
      'zipCode',
      'number'
    ]
    const errors = await form.validateForm()

    const deliveryErrors = Object.keys(errors).filter((key) =>
      deliveryFields.includes(key)
    )

    if (deliveryErrors.length === 0) {
      setIsInPaymentStep(true)
    } else {
      form.setTouched(
        deliveryFields.reduce((acc, field) => {
          acc[field] = true
          return acc
        }, {} as Record<string, boolean>)
      )
    }
  }

  const finish = () => {
    closeCheckout()
    dispatch(clear())
    navigate('/')
  }

  return (
    <CartContainer className={isOpen ? '__is-open' : ''}>
      <Overlay />
      <Sidebar>
        {isSuccess && data ? (
          <ThanksInfos>
            <Header>Pedido realizado - {data.orderId}</Header>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button onClick={finish}>Concluir</Button>
          </ThanksInfos>
        ) : (
          <>
            {!isInPaymentStep ? (
              <PersonalInfos>
                <Header>Entrega</Header>
                <FormInfo>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    type="text"
                    name="receiver"
                    id="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('receiver') ? '__error' : ''}
                  />
                </FormInfo>
                <FormInfo>
                  <label htmlFor="description">Endereço</label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={form.values.description}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('description') ? '__error' : ''
                    }
                  />
                </FormInfo>
                <FormInfo>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? '__error' : ''}
                  />
                </FormInfo>
                <div className="__is-flex">
                  <FormInfo maxWidth="155px">
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('zipCode') ? '__error' : ''}
                      mask="99999-999"
                    />
                  </FormInfo>
                  <FormInfo maxWidth="155px">
                    <label htmlFor="number">Número</label>
                    <input
                      type="text"
                      name="number"
                      id="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('number') ? '__error' : ''}
                    />
                  </FormInfo>
                </div>
                <FormInfo>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    name="complement"
                    id="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('complement') ? '__error' : ''
                    }
                  />
                </FormInfo>
                <Options>
                  <Button onClick={goToPaymentStep}>
                    Continuar com o pagamento
                  </Button>
                  <Button onClick={goToCart}>Voltar para o carrinho</Button>
                </Options>
              </PersonalInfos>
            ) : (
              <CardInfos>
                <Header>
                  Pagamento - Valor a pagar {formatCurrencies(totalPrice)}
                </Header>
                <FormInfo>
                  <label htmlFor="name">Nome no Cartão</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('name') ? '__error' : ''}
                  />
                </FormInfo>
                <div className="__is-flex">
                  <FormInfo maxWidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? '__error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </FormInfo>
                  <FormInfo maxWidth="87px">
                    <label htmlFor="code">CVV</label>
                    <InputMask
                      type="text"
                      name="code"
                      id="code"
                      value={form.values.code}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('code') ? '__error' : ''}
                      mask="999"
                    />
                  </FormInfo>
                </div>
                <div className="__is-flex">
                  <FormInfo maxWidth="155px">
                    <label htmlFor="month">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      name="month"
                      id="month"
                      value={form.values.month}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('month') ? '__error' : ''}
                      mask="99"
                    />
                  </FormInfo>
                  <FormInfo maxWidth="155px">
                    <label htmlFor="year">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      name="year"
                      id="year"
                      value={form.values.year}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('year') ? '__error' : ''}
                      mask="99"
                    />
                  </FormInfo>
                </div>
                <Options>
                  <Button onClick={() => form.handleSubmit()}>
                    Finalizar pagamento
                  </Button>
                  <Button onClick={() => setIsInPaymentStep(false)}>
                    Voltar para a edição de endereço
                  </Button>
                </Options>
              </CardInfos>
            )}
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout
