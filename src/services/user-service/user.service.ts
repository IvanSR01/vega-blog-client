import { accessApi } from "@/$api/axios.api";
import { User } from "@/shared/interfaces/user.interface";

class UserService {
  async findAll(search?: string): Promise<User[]> {
    const { data } = await accessApi<User[]>({
      method: "GET",
      url: "/user",
      params: { search },
    });
    return data;
  }

  async findOne(id: number): Promise<User> {
    const { data } = await accessApi<User>({
      method: "GET",
      url: `/user/by-id/${id}`,
    });
    return data;
  }

  async profile(): Promise<User> {
    const { data } = await accessApi<User>({
      method: "GET",
      url: "/user/info-profile",
    });
    return data;
  }


  async updateProfile(dto: User): Promise<User> {
    const { data } = await accessApi<User>({
      method: "PUT",
      url: "/user/update-profile",
      data: dto,
    });
    return data;
  }

  async deleteProfile(): Promise<void> {
    await accessApi<void>({
      method: "DELETE",
      url: "/user/delete-profile",
    });
  }
}

export default new UserService();
