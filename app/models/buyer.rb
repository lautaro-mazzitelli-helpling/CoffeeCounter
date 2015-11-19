class Buyer < ActiveRecord::Base
  has_many :coffee_boxes

  validates :name,  presence: true,
                    uniqueness: true,
                    length: { maximum: 30 },
                    uniqueness: { case_sensitive: false }

  attr_accessor :amount

  def amount
    self.amount = coffee_boxes.size
  end

  def fullData
    {
      id: id,
      name: name,
      coffee_boxes: coffee_boxes.map { |cb| { date: cb.date, buyer_id: cb.buyer_id } },
      created_at: created_at,
      updated_at: updated_at,
    }
  end
end
