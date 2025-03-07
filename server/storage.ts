import { 
  projects, skills, messages, profile,
  type Project, type InsertProject,
  type Skill, type InsertSkill,
  type Message, type InsertMessage,
  type Profile, type InsertProfile,
  users, type User, type InsertUser
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Profile operations
  getProfile(): Promise<Profile | undefined>;
  updateProfile(profile: InsertProfile): Promise<Profile>;

  // Project operations
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  // Skill operations
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // Message operations
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const user = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return user[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const user = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return user[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [newUser] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return newUser;
  }

  // Profile operations
  async getProfile(): Promise<Profile | undefined> {
    const profiles = await db.select().from(profile).limit(1);
    return profiles[0];
  }

  async updateProfile(profileData: InsertProfile): Promise<Profile> {
    const profiles = await db.select().from(profile);
    if (profiles.length === 0) {
      const [newProfile] = await db
        .insert(profile)
        .values(profileData)
        .returning();
      return newProfile;
    }

    const [updatedProfile] = await db
      .update(profile)
      .set(profileData)
      .where(eq(profile.id, profiles[0].id))
      .returning();
    return updatedProfile;
  }

  // Project operations
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.createdAt);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db
      .insert(projects)
      .values(project)
      .returning();
    return newProject;
  }

  // Skill operations
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(skills.name);
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db
      .insert(skills)
      .values(skill)
      .returning();
    return newSkill;
  }

  // Message operations
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db
      .insert(messages)
      .values(message)
      .returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();