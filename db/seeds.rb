User.create(
  username: "skier1",
  email: "skier1@example.com",
  password: "password",
  password_confirmation: "password",
  role: "skier"
)

# create a snowboarder user
User.create(
  username: "snowboarder1",
  email: "snowboarder1@example.com",
  password: "password",
  password_confirmation: "password",
  role: "snowboarder"
)


Resort.create(
  name: "Aspen Snowmass",
  location: "Aspen, Colorado",
  description: "Aspen Snowmass is a premier winter resort in the heart of the Rockies.",
  image_url: "https://www.aspensnowmass.com/-/media/images/aspensnowmass/homepage/aspensnowmass-2020-winter-hero.jpg"
)

Resort.create(
  name: "Whistler Blackcomb",
  location: "Whistler, British Columbia",
  description: "Whistler Blackcomb is the largest ski resort in North America and offers endless possibilities for adventure.",
  image_url: "https://www.whistlerblackcomb.com/-/media/wb/images/plan-your-trip/plan-your-trip-hero.jpg"
)

# create some trails for Aspen Snowmass resort
aspen_snowmass = Resort.find_by(name: "Aspen Snowmass")
aspen_trails = [
  {
    name: "Ridge of Bell",
    difficulty: "Advanced",
    length: 3.2,
    description: "The Ridge of Bell is a challenging run with steep drop-offs and moguls.",
  },
  {
    name: "Big Burn",
    difficulty: "Intermediate",
    length: 5.3,
    description: "Big Burn is a long, rolling run with stunning views of the surrounding mountains.",
  },
  {
    name: "Dipsy Doodle",
    difficulty: "Beginner",
    length: 2.1,
    description: "Dipsy Doodle is a gentle run that's great for beginners.",
  }
]

aspen_trails.each do |trail|
  aspen_snowmass.trails.create(trail)
end

# create some trails for Whistler Blackcomb resort
whistler_blackcomb = Resort.find_by(name: "Whistler Blackcomb")
whistler_trails = [
  {
    name: "Peak to Creek",
    difficulty: "Advanced",
    length: 5.5,
    description: "Peak to Creek is a long, challenging run that takes you from the peak of Whistler Mountain all the way down to the valley.",
  },
  {
    name: "Franz's Run",
    difficulty: "Intermediate",
    length: 3.9,
    description: "Franz's Run is a fun, rolling run with lots of twists and turns.",
  },
  {
    name: "Burnt Stew Trail",
    difficulty: "Beginner",
    length: 2.2,
    description: "Burnt Stew Trail is a gentle run that's great for beginners.",
  }
]

whistler_trails.each do |trail|
  whistler_blackcomb.trails.create(trail)
end

user1 = User.find_by(username: "skierguy")
user2 = User.find_by(username: "boarderchick")
aspen_ridge_of_bell = Trail.find_by(name: "Ridge of Bell")
whistler_peak_to_creek = Trail.find_by(name: "Peak to Creek")

# create some user trails
user_trails = [
  {
    user_id: user1.id,
    trail_id: aspen_ridge_of_bell.id,
    status: "completed",
    favorite: true,
    note: "This was an awesome run!",
    date: Date.today - 7.days
  },
  {
    user_id: user1.id,
    trail_id: whistler_peak_to_creek.id,
    status: "wishlist",
    favorite: false,
    note: "I hope to ski this run one day!",
    date: nil
  },
  {
    user_id: user2.id,
    trail_id: aspen_ridge_of_bell.id,
    status: "completed",
    favorite: false,
    note: "I didn't like this run very much.",
    date: Date.today - 2.days
  },
  {
    user_id: user2.id,
    trail_id: whistler_peak_to_creek.id,
    status: "completed",
    favorite: true,
    note: "This run was amazing!",
    date: Date.today - 5.days
  }
]

user_trails.each do |user_trail|
  UserTrail.create(user_trail)
end
