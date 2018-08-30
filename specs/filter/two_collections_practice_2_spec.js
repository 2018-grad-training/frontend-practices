import { choose_no_common_elements } from '../../practices/filter/two_collections_practice_2'

describe('choose_no_common_elements', function() {
  const collection_a = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd']
  const collection_b = ['a', 'd', 'e', 'f']

  it('选出A集合中与B集合中的不共有元素', function() {
    const result = choose_no_common_elements(collection_a, collection_b)

    expect(result).toEqual(['h', 't', 'c', 'g', 'b'])
  })
})
