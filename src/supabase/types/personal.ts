export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  personal_data: {
    Tables: {
      address: {
        Row: {
          apartment_number: string | null
          building_number: string
          city: string
          id: number
          id_commune: number | null
          id_county: number | null
          id_province: number | null
          post_city: string | null
          street: string | null
          user_id: string | null
          zip_code: string
        }
        Insert: {
          apartment_number?: string | null
          building_number: string
          city: string
          id?: number
          id_commune?: number | null
          id_county?: number | null
          id_province?: number | null
          post_city?: string | null
          street?: string | null
          user_id?: string | null
          zip_code: string
        }
        Update: {
          apartment_number?: string | null
          building_number?: string
          city?: string
          id?: number
          id_commune?: number | null
          id_county?: number | null
          id_province?: number | null
          post_city?: string | null
          street?: string | null
          user_id?: string | null
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "address_id_commune_fkey"
            columns: ["id_commune"]
            isOneToOne: false
            referencedRelation: "commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "address_id_county_fkey"
            columns: ["id_county"]
            isOneToOne: false
            referencedRelation: "county"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "address_id_province_fkey"
            columns: ["id_province"]
            isOneToOne: false
            referencedRelation: "province"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "address_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      application: {
        Row: {
          comments: string | null
          finished_school: string
          first_choice: boolean
          id: number
          id_competition: number | null
          id_first_lang: number
          id_first_profile: number
          id_second_lang: number
          id_second_profile: number | null
          submit_date: string
          user_id: string | null
        }
        Insert: {
          comments?: string | null
          finished_school: string
          first_choice: boolean
          id?: number
          id_competition?: number | null
          id_first_lang: number
          id_first_profile: number
          id_second_lang: number
          id_second_profile?: number | null
          submit_date?: string
          user_id?: string | null
        }
        Update: {
          comments?: string | null
          finished_school?: string
          first_choice?: boolean
          id?: number
          id_competition?: number | null
          id_first_lang?: number
          id_first_profile?: number
          id_second_lang?: number
          id_second_profile?: number | null
          submit_date?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "application_id_competition_fkey"
            columns: ["id_competition"]
            isOneToOne: false
            referencedRelation: "curatorial_competition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_id_first_lang_fkey"
            columns: ["id_first_lang"]
            isOneToOne: false
            referencedRelation: "foreign_languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_id_first_profile_fkey"
            columns: ["id_first_profile"]
            isOneToOne: false
            referencedRelation: "recruitment_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_id_second_lang_fkey"
            columns: ["id_second_lang"]
            isOneToOne: false
            referencedRelation: "foreign_languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_id_second_profile_fkey"
            columns: ["id_second_profile"]
            isOneToOne: false
            referencedRelation: "recruitment_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      candidate: {
        Row: {
          date_of_birth: string
          first_name: string
          id_address: number | null
          last_name: string
          pesel: string
          place_of_birth: string
          second_name: string | null
          user_id: string
        }
        Insert: {
          date_of_birth: string
          first_name: string
          id_address?: number | null
          last_name: string
          pesel: string
          place_of_birth: string
          second_name?: string | null
          user_id: string
        }
        Update: {
          date_of_birth?: string
          first_name?: string
          id_address?: number | null
          last_name?: string
          pesel?: string
          place_of_birth?: string
          second_name?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "candidate_id_address_fkey"
            columns: ["id_address"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      guardian: {
        Row: {
          first_name: string
          id: number
          id_address: number | null
          last_name: string
          phone_number: string | null
          user_id: string
        }
        Insert: {
          first_name: string
          id?: number
          id_address?: number | null
          last_name: string
          phone_number?: string | null
          user_id: string
        }
        Update: {
          first_name?: string
          id?: number
          id_address?: number | null
          last_name?: string
          phone_number?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "guardian_id_address_fkey"
            columns: ["id_address"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "guardian_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "candidate"
            referencedColumns: ["user_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
