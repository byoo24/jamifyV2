json.users do 
    @users.map do |user|
        json.partial! "api/users/user", user: user
    end
end

