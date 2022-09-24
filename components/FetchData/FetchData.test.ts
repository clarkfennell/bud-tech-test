import { describe, expect, test } from '@jest/globals';
import { FetchData } from './FetchData';

describe('Fetches the API Data', () => {
  test('Id of API should be 0eb7acfd6fa3449676947c9521311cfce618bf9129ac5ac07ba30c76843e0f65fddb', async () => {
    const data = await FetchData()
    expect(data.id).toEqual('0eb7acfd6fa3449676947c9521311cfce618bf9129ac5ac07ba30c76843e0f65fddb');
  })

  test('Id of API should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.id).toBe('string');
  })
})

describe('Fetches the provider data from the API', () => {
  test('The title from the provider data should be Monzo', async () => {
    const data = await FetchData()
    expect(data.provider.title).toEqual('Monzo');
  })

  test('The title from the provider data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.provider.title).toBe('string');
  })

  test('The account number from the provider data should be 12345678', async () => {
    const data = await FetchData()
    expect(data.provider.account_number).toEqual('12345678');
  })

  test('The account number from the provider data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.provider.account_number).toBe('string');
  })

  test('The sort code from the provider data should be 12-34-56', async () => {
    const data = await FetchData()
    expect(data.provider.sort_code).toEqual('12-34-56');
  })

  test('The sort code from the provider data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.provider.sort_code).toBe('string');
  })

  test('The description from the provider data should be Current Account', async () => {
    const data = await FetchData()
    expect(data.provider.description).toEqual('Current Account');
  })

  test('The description from the provider data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.provider.description).toBe('string');
  })
})

describe('Fetches the balance data from the API', () => {
  test('The amount value from the balance data should be 1250.32', async () => {
    const data = await FetchData()
    expect(data.balance.amount).toEqual(1250.32);
  })

  test('The amount value from the balance data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.balance.amount).toBe('number');
  })

  test('The amount currency iso from the balance data should be GBP', async () => {
    const data = await FetchData()
    expect(data.balance.currency_iso).toEqual('GBP');
  })

  test('The amount currency iso from the provider data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.balance.currency_iso).toBe('string');
  })
})

describe('Fetches the first object in the transaction data from the API', () => {
  test('The Id from the transaction data should be 13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28', async () => {
    const data = await FetchData()
    expect(data.transactions[0].id).toEqual('13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28');
  })

  test('The Id from the transaction date should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.transactions[0].id).toBe('string');
  })

  test('The date from the transaction data should be 2018-06-30', async () => {
    const data = await FetchData()
    expect(data.transactions[0].date).toEqual('2018-06-30');
  })

  test('The date value from the transaction data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.transactions[0].date).toBe('string');
  })

  test('The category title from the transaction data should be Groceries', async () => {
    const data = await FetchData()
    expect(data.transactions[0].category_title).toEqual('Groceries');
  })

  test('The category title from the transaction data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.transactions[0].category_title).toBe('string');
  })

  test('The description from the transaction data should be Tesco', async () => {
    const data = await FetchData()
    expect(data.transactions[0].description).toEqual('Tesco');
  })

  test('The description from the transaction data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.transactions[0].description).toBe('string');
  })

  test('The amount value from the transaction data should be -57.21', async () => {
    const data = await FetchData()
    expect(data.transactions[0].amount.value).toEqual(-57.21);
  })

  test('The amount value from the transaction data should be a number', async () => {
    const data = await FetchData()
    expect(typeof data.transactions[0].amount.value).toBe('number');
  })

  test('The amount currency iso from the transaction data should be GBP', async () => {
    const data = await FetchData()
    expect(data.transactions[0].amount.currency_iso).toEqual('GBP');
  })

  test('The amount currency iso from the transaction data should be a string', async () => {
    const data = await FetchData()
    expect(typeof data.transactions[0].amount.currency_iso).toBe('string');
  })
})