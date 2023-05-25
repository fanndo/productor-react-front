import {describe, expect, test} from '@jest/globals';
import { suma } from '../src/helpers/archivo';


describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect( suma(1, 2)).toBe(3);
    
  });
});