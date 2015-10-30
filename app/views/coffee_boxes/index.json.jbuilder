json.array!(@coffee_boxes) do |coffee_box|
  json.extract! coffee_box, :id, :date, :user_id
  json.url coffee_box_url(coffee_box, format: :json)
end
